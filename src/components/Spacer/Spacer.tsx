interface ISpacerProps {
  width?: number,
  height?: number
}

const Spacer = (props: ISpacerProps) => {
  const{ width, height } = props

  return (
    <div style={{width: `${width}px`, height: `${height}px`}}/>   
  );
}

export default Spacer;
