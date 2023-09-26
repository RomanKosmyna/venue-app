import Header from "./Header";
import SubMenu from "./SubMenu";

export default function HeaderContainer() {
    return (
        <div className="w-full flex flex-col">
            <Header />
            <SubMenu />
        </div>
    )
}