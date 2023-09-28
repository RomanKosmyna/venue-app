import Header from "./Header";
import SubMenu from "./SubMenu";

export default function HeaderContainer() {
    return (
        <div className="w-full flex flex-col border-b border-hsla-grey-1">
            <Header />
            <SubMenu />
        </div>
    )
}