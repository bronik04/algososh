import {Circle} from "./circle";
import renderer from 'react-test-renderer';
import {ElementStates} from "../../../types/element-states";

describe('Testing circle component',  () => {
    it('should be without a letter',  () => {
        const circle = renderer.create(<Circle/>).toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be with a letter',  () => {
        const circle = renderer.create(<Circle letter={'a'}/>).toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be with head',  () => {
        const circle = renderer.create(<Circle head={'0'}/>).toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be with a react element in head',  () => {
        const circle = renderer.create(<Circle head={<Circle/>}/>).toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be with tail',  () => {
        const circle = renderer.create(<Circle tail={'0'}/>).toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be with a react element in tail',  () => {
        const circle = renderer.create(<Circle tail={<Circle/>}/>).toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be with index',  () => {
        const circle = renderer.create(<Circle index={0}/>).toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('props isSmall should be true',  () => {
        const circle = renderer.create(<Circle isSmall={true}/>).toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be default state',  () => {
        const circle = renderer
            .create(<Circle state={ElementStates.Default}/>)
            .toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be changing state',  () => {
        const circle = renderer
            .create(<Circle state={ElementStates.Changing}/>)
            .toJSON();
        expect(circle).toMatchSnapshot();
    });

    it('should be modified state',  () => {
        const circle = renderer
            .create(<Circle state={ElementStates.Modified}/>)
            .toJSON();
        expect(circle).toMatchSnapshot();
    });
});