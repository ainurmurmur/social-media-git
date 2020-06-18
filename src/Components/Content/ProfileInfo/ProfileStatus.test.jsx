import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {

  test("status from props should be in the props", () => {
    const component = create(<ProfileStatus status='I am working'/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('I am working');
  });

});