export function evaluateUserClicks(arrClicks: string[]) {
	if (arrClicks.length === 2) {
		const [arg1, arg2] = arrClicks;
		return arg1[0] === arg2[0] && Math.abs(+arg1[2] - +arg2[2]) === 1;
	}
}
