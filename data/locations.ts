export interface Location {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export const locations: Location[] = [
  {
    name: "Bahan, Yangon",
    address: "No.144, Dhammazedi Road, Bahan Township, Yangon",
    email: "myanshi.bahan@gmail.com",
    phone: "09 765 568 747",
  },
  {
    name: "Sanchaung, Yangon",
    address: "No.28, Baho Road, Sanchaung Township, Yangon",
    email: "myanshi.sanchaung@gmail.com",
    phone: "09 765 568 748",
  },
  {
    name: "Mandalay",
    address: "No.900, Mahar Aungmyay Road, Pyigyitagon Township, Mandalay",
    email: "myanshi.mandalay@gmail.com",
    phone: "099 8752 664",
  },
];
