function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

function testFunctionality(confirmInt, succeded) {
  confirmed = zoom.get() === confirmInt;
  if (!confirmed) {
    zoom.reset();
    throw new Error("Failure in testing " + succeded + "!");
  } else {
    console.info(succeded + " succeded");
  }
}

async function test() {
  zoom.zoom(10);
  testFunctionality(10, "zoom.zoom");
  zoom.add(5);
  testFunctionality(15, "zoom.add");
  zoom.minus(10);
  testFunctionality(5, "zoom.minus");
  zoom.invert();
  testFunctionality(0.2, "zoom.invert");
  console.log("SUCCESS!!!");
  zoom.reset();
}