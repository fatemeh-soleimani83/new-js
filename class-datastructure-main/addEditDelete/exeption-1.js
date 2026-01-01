function validateAge(age) {
    if (age < 18) {
      throw new RangeError("under age");
    }
    return true;
  }
  
  try {
    validateAge(17);
  } catch (error) {
    console.error("type:", error.name);
    console.error(" message:", error.message);
  }
  