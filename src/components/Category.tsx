import { Category } from "../types";

const { Text } = figma.widget

export function Category({ name, color, categoryKey }: Category) {
  return (
    <Text
      name={`Category-${name}`}
      key={`Category-${categoryKey}`}
      //hidden = { hideCategory ? true : false }
      fill={color}
      width={name == "Writing" ? 1088 : 810}
      height={50}
      verticalAlignText="center"
      horizontalAlignText="center"
      lineHeight="150%"
      fontFamily="Inter"
      fontSize={32}
      letterSpacing={1.536}
      textCase="upper"
      fontWeight={700}
    >
      {name}
    </Text>
  );
}

