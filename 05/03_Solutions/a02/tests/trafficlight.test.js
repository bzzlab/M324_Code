const app = require('../src/trafficlight');

describe('test suite traffic light undefined', () => {//??
    it.each([//??
        [undefined,"OUT OF ORDER"],//??
        [null,"OUT OF ORDER"],//??
        ["","OUT OF ORDER"],//??
    ])("When color is %s then %s",//??
        (color,expected) => {//??
            expect(app.trafficLight(color))//??
                .toBe(expected);//??
        });//??
});//??

describe('test suite traffic light with colors', () => {//??
    it.each([//??
        ["orange","ATTENTION!"],//??
        ["red","DON'T WALK!"],//??
        ["green","WALK!"],//??
    ])("When color is %s then %s",//??
        (color,expected) => {//??
            expect(app.trafficLight(color))//??
                .toBe(expected);//??
        });//??
});//??
