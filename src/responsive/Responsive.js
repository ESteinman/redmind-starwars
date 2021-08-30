import React, { Component } from 'react'
import './Responsive.styles.css'
import { useMediaQuery } from 'react-responsive'



export function Responsive () {
    const isMobileDevice = useMediaQuery({
        query: "(min-device-width: 480px)",
    });

    const isTabletDevice = useMediaQuery({
        query: "(min-device-width: 768px)",
    });

    const isLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)",
    });

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
    });

    const isBigScreen = useMediaQuery({
        query: "(min-device-width: 1201px )",
    });
}

export class BigScreen extends Component {
    render () {
        return (
            <div className="big-screen">
            </div>
        )
    }
}

export class Desktop extends Component {
    render () {
        return (
            <div className="desktop">
            </div>
        )
    }
}

export class Laptop extends Component {
    render () {
        return (
            <div className="laptop">
            </div>
        )
    }
}

export class TabletMobile extends Component {
    render () {
        return (
            <div className="tablet-mobile">
            </div>
        )
    }
}

export class Mobile extends Component {
    render () {
        return (
            <div className="mobile">
            </div>
        )
    }
}
