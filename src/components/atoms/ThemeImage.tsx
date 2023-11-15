import NextImage, { type ImageProps } from "next/image";

type ThemeImageProps = Omit<ImageProps, "src" | "loading"> & {
	srcLight: string;
	srcDark: string;
};

export const ThemeImage = ({ srcLight, srcDark, ...rest }: ThemeImageProps) => {
	return (
		<>
			<NextImage {...rest} src={srcLight} className="block dark:hidden" />
			<NextImage {...rest} src={srcDark} className="hidden dark:block" />
		</>
	);
};
