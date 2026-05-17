interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <div className="px-8 py-5">
            {children}
        </div>
    );
}

export default Layout;
