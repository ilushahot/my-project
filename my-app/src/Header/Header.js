import React, {Component} from 'react';
import "./header.scss"

export class Header extends Component {
    render() {
        return (
            <div className={"row space-around header-wrapper"}>
                <div className={"header-left"}>
                    <div className={"header-padding"}>
                        Здравствуйте! Вы просматриваете мой проект :)
                    </div>
                    <div className={"header-padding"}>
                        Lorem ipsum
                    </div>
                    <div className={"header-padding"}>
                        quis nostrud
                    </div>
                    <div className={"header-padding"}>
                        aliquip ex ea
                    </div>
                </div>
                <div className={"header-right"}>
                    <div className={"header-padding"}>
                        Nor is
                    </div>
                    <div className={"header-padding"}>
                        who loves
                    </div>
                    <div className={"header-padding"}>
                        desires to
                    </div>
                    <div className={"header-padding"}>
                        because it
                    </div>
                </div>
            </div>
        );
    }
}