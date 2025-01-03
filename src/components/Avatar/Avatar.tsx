import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    readonly hasBorder?: boolean;
}

export function Avatar({hasBorder = true, src}: AvatarProps) {

    return (
        <img 
            src={src}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            alt=""
        />
    )
    
}