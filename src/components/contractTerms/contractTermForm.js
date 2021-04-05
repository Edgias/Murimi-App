import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import useForm from "../common/useForm";
import Button from "../common/button";
import ContentHeader from "../common/contentHeader";
import Content from "../common/content";
import CardBody from "../common/cardBody";
import CardFooter from "../common/cardFooter";
import CardSecondary from "../common/cardSecondary";
import ColMd12 from "../common/colMd12";
import Input from "../common/input";
import Row from "../common/row";
import {
  getContractTerm,
  createContractTerm,
  updateContractTerm,
} from "../../services/cropCategoryService";

export default function ContractTermForm() {
  const history = useHistory();
  const params = useParams();

  const formData = {
    name: "",
  };

  const schema = {
    name: Joi.string().required().label("Name"),
  };

  const {
    data,
    buttonText,
    setData,
    validate,
    errors,
    handleChange,
    handleSubmit,
    handleButtonClick,
  } = useForm(schema, formData, doSubmit);

  useEffect(() => {
    let fetchData = async () => {
      try {
        if (params.id === "new") return;
        let response = await getContractTerm(params.id);
        setData(mapToViewModel(response.data));
      } catch (ex) {
        if (ex.response && ex.response.status === 404)
          return history.replace("/not-found");
      }
    };
    fetchData();
  }, [params.id, history, setData]);

  function mapToViewModel(contractTerm) {
    return {
      name: contractTerm.name,
    };
  }

  async function doSubmit() {
    try {
      if (params.id === "new") {
        await createContractTerm(data);
      } else {
        await updateContractTerm(params.id, data);
      }
      toast.success("Contract term details submitted successfully.");
    } catch {
      toast.error("Error occurred whilst sending your request.");
    }
    history.push("/contract-terms");
  }

  return (
    <>
      <ContentHeader
        title="Contract Term Form"
        parentTitle="Contract Terms"
        parentLink="/contract-terms"
      />
      <Content>
        <Row>
          <ColMd12>
            <CardSecondary>
              <form onSubmit={handleSubmit}>
                <CardBody>
                  <Input
                    name="name"
                    value={data.name}
                    label="Name"
                    onChange={handleChange}
                    error={errors["name"]}
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    label={buttonText}
                    disabled={validate()}
                    className="btn btn-secondary"
                    onClick={handleButtonClick}
                  />
                </CardFooter>
              </form>
            </CardSecondary>
          </ColMd12>
        </Row>
      </Content>
    </>
  );
}
