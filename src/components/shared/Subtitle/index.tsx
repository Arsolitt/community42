import styles from './subtitle.module.scss'

interface SubtitleProps {
	text: string
}
export default function Subtitle( { text }: SubtitleProps ) {
	return (
		<h2 className={styles.subtitle}>
			{text}
		</h2>
	)
}