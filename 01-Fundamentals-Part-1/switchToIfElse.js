const day = "thursday";

switch (day) {
  case "monday":
    console.log("plan my course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theories");
    break;
  case "wednsday":
  case "thursday":
    console.log("preper pc modules");
    break;
  case "friday":
  case "saturday":
    console.log("prepare feast");
    break;
  case "sunday":
    console.log("enjoy the day");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("plan my course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theories");
} else if (day === "wednsday" || day === "thursday") {
  console.log("preper pc modules");
} else if (day === "friday") {
  console.log("review state");
} else if (day === "saturday") {
  console.log("prepare feast");
} else if (day === "sunday") {
  console.log("enjoy the day");
} else {
  console.log("NOT a valid entry");
}
