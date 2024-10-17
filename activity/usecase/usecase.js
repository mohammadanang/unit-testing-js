const activities = [
  {
    id: 1,
    description: 'Reading a book',
  },
  {
    id: 2,
    description: 'Take a nap',
  }
];

const allActivity = (size) => {
  try {
    const result = [];
    if (typeof size != 'number') {
      throw new Error('Size must be defined');
    }

    let i = 0;
    while (i < size) {
      result.push(activities[i]);
      i++;
    }

    return activities;
  } catch (e) {
    throw e;
  }
};

const oneActivity = (id) => {
  try {
    const result = activities.find(val => val.id === id);
    if (result) {
      return result;
    }

    throw new Error('Data not found');
  } catch (e) {
    throw e;
  }
}

export default {
  allActivity,
  oneActivity,
};
