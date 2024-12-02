import React from 'react';
import Image, { ImageProps } from 'next/image';

const MemoizedImage = React.memo((props: ImageProps) => <Image {...props} />);

export default MemoizedImage;
