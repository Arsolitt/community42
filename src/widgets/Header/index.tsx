import Image from "next/image";
import styles from "./header.module.scss";

interface HeaderProps {
	animated: boolean
}

export default function Header({ animated }: HeaderProps) {
	return (
		<div className={styles.wrapper}>
			{animated ? 
			(<Image src="/logo.svg" alt="logo" width={59} height={67} className={styles.header} style={{ margin: "95px 0 0 0" }} />) 
			: (<Image src="/logo.svg" alt="logo" width={59} height={67}  style={{ margin: "48px 0 0 0" }}/>) }
		</div>
	)
}