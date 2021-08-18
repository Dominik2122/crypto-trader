import {HomeRootComponent, Worker} from "./home-root.component";
import {extractOriginalSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/source_file";

describe('HomeRootComponent', () => {
  let fixture: HomeRootComponent

  beforeEach(() => {
    fixture = new HomeRootComponent()
  })

  describe('Setup Component', () => {
    describe('ngOnInit', () => {
      it ('should call doSomething with this.worker', () => {
        const doSomethingSpy = jest.spyOn(fixture, 'doSomething')
        const worker: Worker = {
          name:'Luke',
          id: 45,
          good: false,
        }

        fixture.worker = worker

        fixture.ngOnInit()

        expect(doSomethingSpy).toBeCalledWith(worker)
      })
    })
  })

  describe('doSomething', () => {
      it('should generate form with passed value', () => {
        const worker: Worker = {
          name:'Luke',
          id: 45,
          good: false,
        }

        fixture.doSomething(worker)

        expect(fixture.workerForm.value).toEqual(worker)
      })

    it('should generate form with default value', () => {
      const worker: Worker = {
        name:'Luke',
        id: null,
        good: false,
      }

      const expectedWorker: Worker = {
        name:'Luke',
        id: expect.any(String),
        good: false,
      }

      fixture.doSomething(worker)
      expect(fixture.workerForm.value).toEqual(expectedWorker)

    })
  })
})
