class Convert {

  birthDateToSetModal(birthDate: string): string {
    let splitBirthDate = birthDate.split('/');
    if (splitBirthDate[1].length == 1) {
      splitBirthDate[1] = splitBirthDate[1].padStart(2, '0');
    }

    if (splitBirthDate[0].length == 1) {
      splitBirthDate[0] = splitBirthDate[0].padStart(2, '0');
    }

    return `${splitBirthDate[2]}-${splitBirthDate[0]}-${splitBirthDate[1]}`;
  }

  stringBirthDateToSave(birthDate: string): Date {
    let splitBirthDate = birthDate.split('/');
    return new Date(`${splitBirthDate[2]}/${splitBirthDate[1]}/${splitBirthDate[0]}`);
  }

}

export default new Convert();
