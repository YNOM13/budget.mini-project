import Home from "./Home";
import { mount } from "enzyme"
import {getItems ,addItem} from "../../utils/indexdb";
import {act} from "react-dom/test-utils";

jest.mock("../../utils/indexdb", ()=>({
  getItems:jest.fn(),
  addItem:jest.fn(),
}))
describe('Home component', () => {
  let sut
  let props

  //beforeEach(()=>{
    //sut = mount(<Home {...props}/>)
  //})

  describe('when component is mounted',  () => {

    describe('when transactions are returned successfully', () => {
      beforeEach(()=>{
        getItems.mockImplementation(()=> Promise.resolve([{value:1}]))
      });
      beforeEach(()=>{
        sut = act(()=>mount(<Home {...props}/>))
      })
      beforeEach(async () => {
        await act(async () => {
          sut = mount(<Home {...props}/>)
        })
        sut.update()
      })

      it('should set balance 0',  () => {
        const {balance} = sut.find('Balance').at(0).props()

        expect(balance).toBe(0)
      });

      it('should render with one item', function () {
        const {transactions} = sut.find('Transactions').at(0).props()

        expect(transactions).toEqual([{value:1}])
      });
    });
    describe('when transactions are returned with error', () => {
      let consoleSpy
      beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'error')
        getItems.mockImplementation(()=> Promise.reject('My error'))
      });
      beforeEach(()=>{
        sut = act(()=>mount(<Home {...props}/>))
      })
      beforeEach(async () => {
        await act(async () => {
          sut = mount(<Home {...props}/>)
        })
        sut.update()
      })



      it('should render with zero items', function () {
        const {transactions} = sut.find('Transactions').at(0).props()
        expect(transactions).toEqual([])
      });
      it('should console log error', function () {
        expect(consoleSpy).toHaveBeenCalledWith('error','My error')
      });
    });
    describe('when transactions was added', () => {
      it('should increase balance', () => {
        const {onChange} = sut.find('Form').at(0).props()

        onChange({value:1,date:'',comment:''})
        sut.update()
        const {balance} = sut.find('Balance').at(0).props()

        expect(balance).toBe(0)
      })
    })
  });



})