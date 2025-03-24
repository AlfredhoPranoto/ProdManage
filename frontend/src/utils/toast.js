import { toaster } from "@/components/ui/toaster";
export const showToast = (type, title, message) => {
  toaster.create({
    title,
    description: message,
    type,
    duration:3000,
    action: {
      label: "close",
    },
  });
};
