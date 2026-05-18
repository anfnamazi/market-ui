import { Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { Form } from "./components/Form/Form";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Question } from "./components/Question/Question";
import { Services } from "./components/Services/Services";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <Stack gap={40}>
            <Navbar />
            <Stack gap={80}>
                <Hero />
                <Services />
                <Form />
                <Question />
            </Stack>
        </Stack>
    );
};

export default Home;
