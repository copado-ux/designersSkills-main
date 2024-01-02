import { Category } from "../types";

const { Text } = figma.widget

export function Category({ name, color, skills, categoryKey }: Category) {
  console.log(skills);

  return (
    <Text
      name={`Category-${name}`}
      key={`Category-${categoryKey}`}
      //hidden = { hideCategory ? true : false }
      fill={color}
      width={250 * skills.length + (30 * (skills.length -1))}
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

