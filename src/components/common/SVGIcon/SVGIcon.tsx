import { memo, Suspense } from 'react';
import { ISVGIconProps, TagType } from './interfaces';
import { IconMap } from './helper';

const SVGIcon = (props: ISVGIconProps) => {
  const { iconName, className, useDiv, style = {}, ...rest } = props;

  const Icon = IconMap?.[iconName];

  const ContainerType: TagType = useDiv ? 'div' : 'span';

  const WrappedIcon = () =>
    className ? (
      <ContainerType style={style} className={className}>
        <Icon {...rest} className={className} />
      </ContainerType>
    ) : (
      <Icon {...rest} className={className} />
    );

  return (
    <Suspense fallback={<></>}>
      <WrappedIcon />
    </Suspense>
  );
};

export default memo(SVGIcon);
