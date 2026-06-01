import { printerIcons } from "../../utils/icons";

const Icon = ({ isIcon, icon }) => {
    return (
        <>
            {isIcon && <>
                {'url' === icon.type ? <>
                    {icon.url && <img src={icon.url} alt='Printer Icon' />}
                </> : printerIcons[icon.default]}
            </>}
        </>
    )
}

export default Icon;