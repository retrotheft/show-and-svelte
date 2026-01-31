export declare const stageState: {
    updates: number[];
};
import '../assets/stage.css';
declare const Stage: import("svelte").Component<{
    children: any;
    width?: string;
    height?: string;
    size?: number;
    transitionTimeout?: number;
}, {}, "">;
type Stage = ReturnType<typeof Stage>;
export default Stage;
