import React, { useEffect, useState } from "react";
import { illustrations } from "../../../../core/app_images";
import { addDaysInDate, getFormatedDate } from "../../../../utils/functions";
import EditorJS from "../../../shared/components/editor_js";



const ProjectDescriptionSection = (props) => {
    const { project, tabTo } = props;
    const [isValid, setIsValid] = useState(true);

    const verifyDateToNow = () => {
        let dateNow = new Date();
        let dateCreated = addDaysInDate(new Date(project.created_at), project.days_to_expires);

        return (dateNow <= dateCreated);
    }

    useEffect(() => {
        setIsValid(verifyDateToNow())

    }, [project])

    return (
        <section className="py-sm-5 py-5 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row py-lg-7 py-5">
                            <div className="col-lg-3 col-md-5 position-relative my-auto">
                                <img className="img border-radius-lg max-width-200 w-100 position-relative z-index-2" src={project.client.image ? project.client.image : illustrations.signUp} alt="Illustrating Client" />
                            </div>
                            <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h4 className="mb-0">{project.title}</h4>
                                    <div className="d-block">
                                        <button type="button" className={`btn btn-sm btn-outline-${isValid ? "success" : "dark"} text-nowrap mb-0`} disabled={!isValid} >{isValid ? "Válida" : "Expirada"}</button>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-auto">
                                        <span className="h6">Empresa: </span>
                                        <span>{project.client.name}</span>
                                    </div>
                                    <div className="col-auto">
                                        <span className="h6">Emissão: </span>
                                        <span>{getFormatedDate(new Date(project.created_at))}</span>
                                    </div>
                                    <div className="col-auto">
                                        <span className="h6">Expira: </span>
                                        <span>{getFormatedDate(addDaysInDate(new Date(project.created_at), project.days_to_expires))}</span>
                                    </div>

                                </div>
                                <div className="text-lg mb-0">
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <p className="text-lg mt-3">
                                    <a href={`#${tabTo}`} className="text-info icon-move-right">
                                        {"Ver detalhes..."}
                                        <i className="fas fa-arrow-right text-sm ms-1"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDescriptionSection