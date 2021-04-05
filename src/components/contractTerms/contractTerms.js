import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { toast } from "react-toastify";
import { paginate } from "../../utils/pagination";
import Card from "../common/card";
import CardHeader from "../common/cardHeader";
import CardBody from "../common/cardBody";
import CardFooter from "../common/cardFooter";
import Content from "../common/content";
import ContentHeader from "../common/contentHeader";
import Error from "../error500";
import LoadingSpinner from "../common/loadingSpinner";
import NoRecords from "../common/noRecords";
import Pagination from "../common/pagination";
import ContractTermsTable from "./contractTermsTable";
import SearchBox from "../common/searchBox";
import {
  getContractTerms,
  deleteContractTerm,
} from "../../services/cropCategoryService";

export default function ContractTerms() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFaulted, setIsFaulted] = useState(false);
  const [contractTerms, setContractTerms] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });

  useEffect(() => {
    const fetchData = async () => {
      let skip = (currentPage - 1) * pageSize;
      try {
        let response = await getContractTerms(skip, pageSize, searchQuery);
        if (response.status === 200) {
          setIsLoading(false);
          setContractTerms(response.data.data);
          setTotal(parseInt(response.data.total));
        }

        if (response.status === 204) {
          setIsLoading(false);
        }
      } catch {
        setIsLoading(false);
        setIsFaulted(true);
      }
    };
    fetchData();
  }, [currentPage, searchQuery]);

  const handleDelete = async (contractTerm) => {
    const originalContractTerms = contractTerms;
    const filteredContractTerms = originalContractTerms.filter(
      (ft) => ft.id !== contractTerm.id
    );
    setContractTerms(filteredContractTerms);
    try {
      await deleteContractTerm(contractTerm.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This contract term has already been deleted");

      setContractTerms(originalContractTerms);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  if (isLoading) return <LoadingSpinner />;
  else {
    if (isFaulted) return <Error errorCode="500" />;
    if (total === 0) return <NoRecords path="contract-terms" />;

    const sortedContractTerms = _.orderBy(
      contractTerms,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginatedContractTerms = paginate(
      sortedContractTerms,
      currentPage,
      pageSize
    );

    return (
      <>
        <ContentHeader
          title="Contract Terms"
          parentTitle="Home"
          parentLink="/"
        />
        <Content>
          <div className="row">
            <div className="col-12">
              <Card>
                <CardHeader>
                  <h3 className="card-title">
                    <Link
                      to="/contract-terms/new"
                      className="btn btn-sm btn-secondary"
                    >
                      <i className="fas fa-plus mr-2"></i>
                      Add New
                    </Link>
                  </h3>
                  <div className="card-tools">
                    <SearchBox
                      value={searchQuery}
                      onChange={handleSearchQueryChange}
                    />
                  </div>
                </CardHeader>
                <CardBody cssClassName="table-responsive p-0">
                  <ContractTermsTable
                    contractTerms={paginatedContractTerms}
                    sortColumn={sortColumn}
                    onDelete={handleDelete}
                    onSort={handleSort}
                  />
                </CardBody>
                <CardFooter>
                  <Pagination
                    itemsCount={total}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </CardFooter>
              </Card>
            </div>
          </div>
        </Content>
      </>
    );
  }
}
