import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeTreeComponent} from 'src/app/home/home-tree/HomeTreeComponent';
import {TreeModule} from 'src/app/util/tree/TreeModule';
import {TreeNodeResource} from 'src/app/util/tree/infrastructure/TreeNodeResource';
import {HomeTreeNodeResource} from 'src/app/home/home-tree/infrastructure/HomeTreeNodeResource';
import {TextBadgeModule} from 'src/app/util/text-badge/TextBadgeModule';
import {UtilModule} from 'src/app/util/UtilModule';
import {EffectsModule} from '@ngrx/effects';

import {HomeTreeNodesEffects} from 'src/app/home/home-tree/store/HomeTreeNodesEffects';
import {StoreModule} from '@ngrx/store';
import {homeTreeNodesFeatureKey, reducer} from 'src/app/home/home-tree/store/HomeTreeNodesReducer';
import {HomeTreeNodeRepository} from 'src/app/home/home-tree/store/HomeTreeNodeRepository';
import {HomeTreeNodeService} from 'src/app/home/home-tree/domain/service/HomeTreeNodeService';
import {HomeTreeNodeChildComponent} from 'src/app/home/home-tree/home-tree-node-child/HomeTreeNodeChildComponent';
import {ChartModule} from 'src/app/util/chart/ChartModule';
import {TransactionsModule} from 'src/app/shared/transactions/TransactionsModule';
import {ButtonModule} from 'src/app/util/button/ButtonModule';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HomeTreeComponent,
    HomeTreeNodeChildComponent
  ],
  imports: [
    CommonModule,
    TreeModule,
    TextBadgeModule,
    UtilModule,
    StoreModule.forFeature(homeTreeNodesFeatureKey, reducer),
    EffectsModule.forFeature([HomeTreeNodesEffects]),
    ChartModule,
    TransactionsModule,
    ButtonModule,
    NgxPopperjsModule,
    RouterModule
  ],
  exports: [
    HomeTreeComponent,
    HomeTreeNodeChildComponent
  ],
  providers: [
    {provide: TreeNodeResource, useClass: HomeTreeNodeResource},
    HomeTreeNodeRepository,
    HomeTreeNodeService
  ]
})
export class HomeTreeModule {
}
