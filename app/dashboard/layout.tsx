import DashBoardLayoutWrapper from "./DashBoardLayoutWrapper";


export default function Dashboardlayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <DashBoardLayoutWrapper>
            {children}
        </DashBoardLayoutWrapper>
        
        </>
    )
}