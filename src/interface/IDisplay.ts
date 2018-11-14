import IMatchResult from './IMatchResult'

export default interface IDisplay {
    label: string;
    render: (result: IMatchResult) => void;
}
