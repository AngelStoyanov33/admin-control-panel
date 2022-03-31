import React from "react";
import RepoCard from "react-repo-card";
import "./versionControlComponent.css";
import "../../../../App.css";
import Sidebar from "../../Sidebar/sideBarComponent";

function VersionControlComponent() {
  const content = (
    <React.Fragment>
      <div className="gitcard">
        <RepoCard
          username="AngelStoyanov33"
          repository="ad-b2c-authentication-svc-jvm"
        />
      </div>
      <div className="gitcard">
        <RepoCard
          username="AngelStoyanov33"
          repository="pitch-management-svc"
        />
      </div>
      <div className="gitcard">
        <RepoCard
          username="AngelStoyanov33"
          repository="feedback-management-svc"
        />
      </div>
      <div className="gitcard">
        <RepoCard username="AngelStoyanov33" repository="api-gateway" />
      </div>
      <div className="gitcard">
        <RepoCard username="AngelStoyanov33" repository="user-management-svc" />
      </div>
      <div className="gitcard">
        <RepoCard
          username="AngelStoyanov33"
          repository="azure-storage-adapter-svc"
        />
      </div>
    </React.Fragment>
  );

  return (
    <div>
      <Sidebar content={content} />
    </div>
  );
}

export default VersionControlComponent;
