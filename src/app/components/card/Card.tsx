import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CustomCard({logo, number, text}: any) {
  return (
    <Card className="max-w-[400px] bg-gradient-to-r from-gray-900 to-gray-950">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={logo}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-3xl font-bold">{number}</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-sm">{text}</p>
      </CardBody>
    </Card>
  );
}