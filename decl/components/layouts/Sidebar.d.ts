import * as React from "react";
import "./Sidebar.scss";
declare enum Mode {
    VERTICAL = "vertical",
    INLINE = "inline",
    HORIZONTAL = "horizontal"
}
interface SidebarState {
    collapsed: boolean;
    mode: Mode | undefined;
}
declare class Sidebar extends React.Component<{}, SidebarState> {
    constructor(props: {});
    render(): JSX.Element;
    private toggle;
}
export default Sidebar;
