"use client";

import cls from "./Video.module.scss";

export const Video = () => {
	return (
		<video
			className={cls.video}
			autoPlay
			loop
			muted
			src="/welcome.mp4" >
		</video >
	)
}