import type { NextApiRequest, NextApiResponse } from "next";

type DataType = {
  name: string;
};

export default (_req: NextApiRequest, res: NextApiResponse<DataType>) => {
  res.status(200).json({ name: "John Doe" });
};
