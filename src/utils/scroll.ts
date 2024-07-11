export const scrollTo = (top: number, behavior: ScrollBehavior) => {
  window.scrollTo({
    top,
    behavior,
  });
};

export const navigateHandler = (e: React.SyntheticEvent) => {
  let top: number;
  const navigateTo: string = (e?.target as HTMLElement)?.id;
  switch (navigateTo) {
    case "link_about":
      top = document?.getElementById("about")?.getBoundingClientRect().y ?? 0;
      break;
    case "link_experience":
      top =
        document?.getElementById("experience")?.getBoundingClientRect().y ?? 0;
      break;
    case "link_projects":
      top =
        document?.getElementById("projects")?.getBoundingClientRect().y ?? 0;
      break;
    case "link_contact":
      top = document?.getElementById("contact")?.getBoundingClientRect().y ?? 0;
      break;
    default:
      top = 0;
  }
  console.log("scrollTo", top);
  scrollTo(top, "smooth");
};
