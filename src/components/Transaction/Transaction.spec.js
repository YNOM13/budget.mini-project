import React from "react";
import Transaction from "./Transaction";
import { shallow } from "enzyme"
describe('Transaction component', () => {
    let sut
    let props
    beforeEach(()=>{
        props = {
            transaction: {
                value:'0',
                comment:'test',
                date:'01.01.2023',
            }
        }
        sut = shallow(<Transaction {...props}/>)
    })
    it('should how transaction', () => {
        expect(sut).toMatchSnapshot()
    })
})