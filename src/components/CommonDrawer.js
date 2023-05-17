import Drawer from "@mui/material/Drawer";
import { forwardRef, useImperativeHandle, useState } from "react";

const CommonDrawer = (props, ref) => {
    const [open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            drawerOpen: () => setOpen(true),
            drawerClose: () => setOpen(false),
        };
    });
    return (
        <>
            <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
                {props.children}
            </Drawer>
        </>
    );
}

export default forwardRef(CommonDrawer);