from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from datetime import date, datetime, timedelta
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField('get_token')
    isAdmin = serializers.SerializerMethodField('get_is_admin')

    def get_token(self, user):
        return Token.objects.get_or_create(user=user)[0].key

    def get_is_admin(self, user):
        return user.is_superuser

    class Meta:
        model = get_user_model()
        fields = ('email', 'password', 'login', 'token', 'isAdmin')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5},
                        'token': {'read_only': True},
                        'isAdmin': {'read_only': True}
                        }

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user



class AuthTokenSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        user = authenticate(
            username=email,
            password=password
            )

        if not user:
            raise serializers.ValidationError('unable to authenticate', code='authentication')
        attrs['user'] = user
        if datetime.today().replace(tzinfo=None) - user.last_login.replace(tzinfo=None) >= timedelta(days=1):
            user.account.first().balance += 500
        user.last_login = date.today()
        user.save()
        return user
