interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <div className="px-8 py-5 h-full bg-surface-light-50">
            {children}
        </div>
    );
}

export default Layout;
