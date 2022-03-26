import { ChangeEventHandler, FormEventHandler } from "react";

export type HeaderProps = {
	handleSearchSubmit?: FormEventHandler<HTMLFormElement>;
	handleChange?: ChangeEventHandler;
	searchValue?: string;
};

export type GithubMarkProps = {
	markClassName?: string;
	logoClassName?: string;
	parentClassName?: string;
}
