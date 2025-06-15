import { toast } from "react-toastify";

export const showSuccessToast = (resp: any) => {
    if (resp?.error) {
        if (Array.isArray(resp?.error?.data?.message)) {
            toast.error(resp?.error?.data?.message[0])
            return false;
        }
        toast.error(resp?.error?.data?.message);
        return false;
    }

    if (Array.isArray(resp?.data?.message)) {
        toast.success(resp?.data?.message[0])
    }
    else {
        toast.success(resp?.data?.message);
    }
    return true;
}

export const showErrorToast = (err: any) => {
    if (Array.isArray(err?.data?.message)) {
        toast.error(err?.data?.message[0])
        return false;
    }
    toast.error(err?.data?.message);
    return false;
}