import React, {Component} from 'react';
import "./header.scss"

export class Header extends Component {
    render() {
        return (
            <div className={"row space-around header-wrapper"}>
                <div className={"header-left"}>
                    <div className={"header-padding header-hover"}>
                        Здравствуйте! Вы просматриваете мой проект :)
                    </div>
                    <div className={"header-padding header-hover"}>
                        Lorem ipsum
                    </div>
                    <div className={"header-padding header-hover"}>
                        quis nostrud
                    </div>
                    <div className={"header-padding header-hover"}>
                        aliquip ex ea
                    </div>
                </div>
                <div className={"header-right"}>
                    <div className={"header-padding header-hover"}>
                        Nor is
                    </div>
                    <div className={"header-padding header-hover"}>
                        who loves
                    </div>
                    <div className={"header-padding header-hover"}>
                        desires to
                    </div>
                    <div className={"header-padding header-hover"}>
                        because it
                    </div>
                </div>
            </div>
        );
    }
}