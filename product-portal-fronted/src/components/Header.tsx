interface HeaderProps {
    title: string
    desc: string
}

function Header({title, desc}: HeaderProps) {
    return (
        <header>
            {title}
            {desc}
        </header>
    );
}

export default Header; //Xuất mặc định ra function Header (1 file được 1 export default)