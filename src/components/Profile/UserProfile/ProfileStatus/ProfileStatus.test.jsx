import React from 'react'
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus Component', () => {
   test('status from props should be in the state', () => {
       const component = create(<ProfileStatus status="stat" />);
       const instance = component.getInstance();
       expect(instance.state.status).toBe("stat");
   });
    test("after component render tag type of p should be displayed", () => {
        const component = create(<ProfileStatus />);
        const root = component.root;
        const p = root.findByType("p");
        expect(p).not.toBeNull();
    });
    test("after component render tag type of input should not be displayed", () => {
        const component = create(<ProfileStatus />);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });
    test("after component render tag type of p should contains correct status", () => {
        const component = create(<ProfileStatus status={'stat'} />);
        const root = component.root;
        const p = root.findByType('p');
        expect(p.children[0]).toBe('stat');
    });
    test("input should be displayed in edit mode instead of p", () => {
        const component = create(<ProfileStatus status={'stat'} />);
        const root = component.root;
        const p = root.findByType('p');
        p.props.onClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('stat');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'stat'} updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});