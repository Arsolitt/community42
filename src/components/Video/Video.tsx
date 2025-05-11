'use client';

import cls from './Video.module.css';

export const Video = () => {
  return <video muted className={cls.video} src='/welcome.mp4' autoPlay loop></video>;
};
