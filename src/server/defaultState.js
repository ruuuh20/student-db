export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Admin1",
    },
    {
      id: "U2",
      name: "Admin2",
    },
  ],
  courses: [
    {
      name: "English A",
      id: "C1",
      owner: "U1",
    },
    {
      name: "English B",
      id: "C2",
      owner: "U1",
    },
    {
      name: "English A",
      id: "C3",
      owner: "U1",
    },
  ],
  students: [
    {
      name: "Harry",
      id: "S1",
      course: "C1",
      owner: "U1",
      isRegistered: false,
    },
    {
      name: "Ron",
      id: "S2",
      course: "C1",
      owner: "U1",
      isRegistered: true,
    },
    {
      name: "Hermione",
      id: "S3",
      course: "C2",
      owner: "U2",
      isRegistered: false,
    },
    {
      name: "Draco",
      id: "S4",
      course: "C2",
      owner: "U1",
      isRegistered: true,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "CO1",
      student: "S1",
      content: "Great work!",
    },
  ],
};
