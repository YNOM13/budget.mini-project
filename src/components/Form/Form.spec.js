import Form from "./Form";
import { shallow } from "enzyme"
describe('Form component', () => {
    let sut
    let props

    beforeEach(()=>{
        const spy = jest
          .spyOn(global, 'Date')
          .mockImplementation(() => ({
              toISOString:() => '2023-01-01T19:21:26.105Z'
          }))
    })

    beforeEach(()=>{
        props = {
            onChange: jest.fn(),
        }
        sut = shallow(<Form {...props}/>)
    })

    describe('when edit Form', function () {
        it('should change value input', function () {
            let input = sut.find('input[name="value"]').at(0)
            input.simulate('change',{target:{
                    value:'123',
                    name:'value'
                }})

            sut.update()
            input = sut.find('input[name="value"]').at(0)
            const props = input.props()
            expect(props.value).toBe('123')
        });
        it('should change comment input', function () {
            const expectedResult = 'comment hello'
            let input = sut.find('input[name="comment"]').at(0)
            input.simulate('change',{target:{
                    value:'comment hello',
                    name:'comment'
                }})
            sut.update()
            input = sut.find('input[name="comment"]').at(0)
            const {value} = input.props()
            expect(value).toBe(expectedResult)
        });
        it('should change date input', function () {
            const expectedResult = '01.01.2023'
            let input = sut.find('input[name="date"]').at(0)
            input.simulate('change',{target:{
                    value:'01.01.2023',
                    name:'date'
                }})
            sut.update()
            input = sut.find('input[name="date"]').at(0)
            const {value} = input.props()
            expect(value).toBe(expectedResult)
        });
    });

    describe('when user submit form', ()=>{
        it('should call onChange form the props', function () {
            const form = sut.find('form');
            form.simulate('submit',{preventDefault:jest.fn()})

            expect(props.onChange).toHaveBeenCalledTimes(0)
        });

        it('should send form data', function () {

            let input = sut.find('input[name="value"]').at(0)
            input.simulate('change',{target:{
                    value:'123',
                    name:'value'
            }})

            input = sut.find('input[name="comment"]').at(0)
            input.simulate('change',{target:{
                    value:'comment hello',
                    name:'comment'
            }})

            sut.update()
            const form = sut.find('form');

            form.simulate('submit',{preventDefault:jest.fn()})

            expect(props.onChange).toHaveBeenCalledWith({
                date:"2023-01-01",
                value:'123',
                comment:'comment hello',
            })
        });
    })
})