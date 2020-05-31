import React from "react"
import Adapter from 'enzyme-adapter-react-16'

import { configure, shallow } from 'enzyme'

configure({
    adapter: new Adapter()
})

import AboutPage from "@ui/Pages/AboutPage"

describe("<AboutPage />", () => {
    it("should render without throwing an error", () => {
        const Component = <AboutPage />
        const TestComponent = <p>Simple React App: A simple React application for quick UI development.</p>

        expect(shallow(Component).contains(TestComponent))
            .toBe(true)
    })
})